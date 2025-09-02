
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


// --------- Product Types and Functions ---------

export interface Product {
    id?: string;
    name: string;
    category: string;
    price: number;
    image: string;
    dataAiHint: string;
    rating: number;
    isNew: boolean;
    timestamp: any;
}

const productsCollectionRef = collection(db, 'products');

export const addProduct = async (productData: Omit<Product, 'id' | 'timestamp'>) => {
    try {
        await addDoc(productsCollectionRef, {
            ...productData,
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error adding product: ", error);
        throw new Error("Could not add product to Firestore.");
    }
};

export const getProducts = async (): Promise<Product[]> => {
    try {
        const q = query(productsCollectionRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        } as Product));
    } catch (error) {
        console.error("Error getting products: ", error);
        throw new Error("Could not fetch products from Firestore.");
    }
};

export const deleteProduct = async (productId: string) => {
    try {
        await deleteDoc(doc(db, 'products', productId));
    } catch (error) {
        console.error("Error deleting product: ", error);
        throw new Error("Could not delete product from Firestore.");
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


// --------- Vote Types and Functions ---------

export interface Vote {
    id?: string;
    contestantId: string;
    contestantName: string;
    contestantCategory: string;
    numberOfVotes: number;
    timestamp: any;
}

const votesCollectionRef = collection(db, 'votes');

export const addVote = async (voteData: Omit<Vote, 'id' | 'timestamp'>) => {
    try {
        await addDoc(votesCollectionRef, {
            ...voteData,
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error adding vote: ", error);
        throw new Error("Could not add vote to Firestore.");
    }
};

export const getVotes = async (): Promise<Vote[]> => {
    try {
        const q = query(votesCollectionRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            timestamp: data.timestamp?.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) || 'N/A',
          } as Vote
        });
    } catch (error) {
        console.error("Error getting votes: ", error);
        throw new Error("Could not fetch votes from Firestore.");
    }
};
