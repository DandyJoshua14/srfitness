
import { db } from '@/lib/firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Define the structure of a Post for type safety
interface Post {
  id?: string;
  author: { name: string; avatar: string; dataAiHint: string; };
  timestamp: any; // Firestore timestamp
  title: string;
  content: string;
  image: string;
  dataAiHint: string;
  likes: number;
  comments: number;
  isAnnouncement: boolean;
  category: string;
}

const postsCollectionRef = collection(db, 'blogPosts');

// Function to add a new post
export const addPost = async (postData: Omit<Post, 'id' | 'timestamp'>) => {
  try {
    const docRef = await addDoc(postsCollectionRef, {
      ...postData,
      timestamp: serverTimestamp(), // Use server timestamp for consistency
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Could not add post to Firestore.");
  }
};

// Function to get all posts, ordered by timestamp
export const getPosts = async (): Promise<Post[]> => {
  try {
    const q = query(postsCollectionRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            // Convert Firestore Timestamp to a simple Date string for client-side usage
            timestamp: data.timestamp?.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || new Date().toLocaleDateString(),
        } as Post;
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Could not fetch posts from Firestore.");
  }
};

// Function to delete a post
export const deletePost = async (postId: string) => {
  try {
    await deleteDoc(doc(db, 'blogPosts', postId));
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw new Error("Could not delete post from Firestore.");
  }
};
