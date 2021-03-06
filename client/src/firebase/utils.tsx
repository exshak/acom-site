import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCUB83oOXtpa9GEzcDWuDUUX3hFweyGmwo',
  authDomain: 'acom-site.firebaseapp.com',
  databaseURL: 'https://acom-site.firebaseio.com',
  projectId: 'acom-site',
  storageBucket: 'acom-site.appspot.com',
  messagingSenderId: '634305137944',
  appId: '1:634305137944:web:1b13aa5403fb9ed06e226d',
  measurementId: 'G-6RXDGY5R75'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth

    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc()

    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator: any, collection: any) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
