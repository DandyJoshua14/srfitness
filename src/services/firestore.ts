
import { db } from '@/lib/firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp, getDoc } from 'firebase/firestore';


// --------- Blog Post Types and Functions ---------

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

export const addPost = async (postData: Omit<Post, 'id' | 'timestamp'>) => {
  try {
    await addDoc(postsCollectionRef, {
      ...postData,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Could not add post to Firestore.");
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const q = query(postsCollectionRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            timestamp: data.timestamp?.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || new Date().toLocaleDateString(),
        } as Post;
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Could not fetch posts from Firestore.");
  }
};

export const deletePost = async (postId: string) => {
  try {
    await deleteDoc(doc(db, 'blogPosts', postId));
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw new Error("Could not delete post from Firestore.");
  }
};

// --------- Magazine Article Types and Functions ---------

export interface Article {
  id?: string;
  title: string;
  category: string;
  image: string;
  dataAiHint: string;
  excerpt: string;
  timestamp: any;
}

const articlesCollectionRef = collection(db, 'magazineArticles');

export const addArticle = async (articleData: Omit<Article, 'id' | 'timestamp'>) => {
  try {
    await addDoc(articlesCollectionRef, {
        ...articleData,
        timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error("Error adding article: ", error);
    throw new Error("Could not add article to Firestore.");
  }
};

export const getArticles = async (): Promise<Article[]> => {
  try {
    const q = query(articlesCollectionRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp?.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || new Date().toLocaleDateString(),
      } as Article;
    });
  } catch (error) {
    console.error("Error getting articles: ", error);
    throw new Error("Could not fetch articles from Firestore.");
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    await deleteDoc(doc(db, 'magazineArticles', articleId));
  } catch (error) {
    console.error("Error deleting article: ", error);
    throw new Error("Could not delete article from Firestore.");
  }
};


// --------- Nomination Types and Functions ---------

export interface Nomination {
  id?: string;
  category: string;
  nomineeName: string;
  nomineePhone: string;
  nominationReason: string;
  nominatorName: string;
  nominatorPhone: string;
  timestamp: any;
}

const nominationsCollectionRef = collection(db, 'nominations');

export const addNomination = async (nominationData: Omit<Nomination, 'id' | 'timestamp'>) => {
    try {
        await addDoc(nominationsCollectionRef, {
            ...nominationData,
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error adding nomination: ", error);
        throw new Error("Could not add nomination to Firestore.");
    }
};

export const getNominations = async (): Promise<Nomination[]> => {
    try {
        const q = query(nominationsCollectionRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                timestamp: data.timestamp?.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) || 'N/A',
            } as Nomination;
        });
    } catch (error) {
        console.error("Error getting nominations: ", error);
        throw new Error("Could not fetch nominations from Firestore.");
    }
};
