import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};


class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.githubProvider = new firebase.auth.GithubAuthProvider();

    this.database = firebase.database();
    this.userIdError = 'Error: not found userId in local storage';
  }
  // Auth API
  // Redirect is not working.
  // Хром блокировал куки от Гугла
  /* doSignInWithGoogleRedirect = () => {
    this.auth.signInWithRedirect(this.googleProvider)
    this.auth.getRedirectResult();
  } */
  
  // User API
  getUserData = () => this.auth.currentUser;

  // Social SignIn
  doSignInWithGooglePopup = () => {
    return this.auth.signInWithPopup(this.googleProvider);
  }
  
  doSignInWithFacebookPopup = () => {
    return this.auth.signInWithPopup(this.facebookProvider);
  }
 
  doSignInWithGithubPopup = () => {
    return this.auth.signInWithPopup(this.githubProvider);
  }
  
  // Email and Password SignIn
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // Write to database rss-source
  addUserRssSource = (userId, title, url, rssUrl, sourceName) => {
    this.database.ref(userId + '/sources/').push({
      title,
      url,
      rssUrl,
      sourceName,
    });
  }

  // Get rss-sources from database
  getUserRssSources = async () => {
    const userId = localStorage.userId;
    if (userId) {
      return await this.database.ref(userId + '/sources/')
        .once('value')
        .then(data => data.val());
    } else {
      console.log(this.userIdError);
    }
}
  
  // Get user view mode from daatabase
  getUserViewMode = async () => {
    const userId = localStorage.userId;
    if (userId) {
      return await this.database.ref(userId + '/viewMode/type/')
        .once('value')
        .then(data => data.val())
    } else {
      console.log(this.userIdError);
    }
  }

  // Get user theme from database
  getUserTheme = async () => {
    const userId = localStorage.userId;
    if (userId) {
      return await this.database.ref(userId + '/theme/type/')
        .once('value')
        .then(data => data.val())
    } 
  }

  // Edit rss-source in database
  editUserRssSource = async (dataId, sourceField, value) => {
    let updates = {};
    const userId = localStorage.userId;
    
    if (userId) {
      updates[userId + '/sources/' + dataId + '/' + sourceField] = value;

      return await this.database
        .ref()
        .update(updates, (error) => {
          if (error) {
            console.log('Error: some error, data not update.' + error.message);
          };
        });
    } else {
      console.log(this.userIdError);
    }
  }

  deleteUserRssSource = async (dataId) => {
    const userId = localStorage.userId;
    
    return await this.database.ref(userId + '/sources/'+ dataId)
      .remove()
      .catch(error => console.log('Remove failed' + error.message));
  }

  // Set view mode in database
  setUserViewMode = async (viewMode) => {
    const userId = localStorage.userId;

    if (userId) {
      let updates = {};
      updates[userId + '/viewMode/type/'] = viewMode;
      return await this.database
        .ref()
        .update(updates, (error) => {
          if (error) {
            console.log('Error: some error, data not update.' + error.message);
          };
        });

    } else {
      console.log(this.userIdError);
    }
  }
  
  // Set theme in database
  setUserTheme = async (theme) => {
    const userId = localStorage.userId;

    if (userId) {
      let updates = {};
      updates[userId + '/theme/type/'] = theme;
      return await this.database
        .ref()
        .update(updates, (error) => {
          if (error) {
            console.log('Error: some error, data not update.' + error.message);
          };
        });

    } else {
      console.log(this.userIdError);
    }
  }

  // Get read later feeds from database
  getFeedsToReadLater = async () => {
    const userId = localStorage.userId;
    if (userId) {
      return await this.database.ref(userId + '/readLater/')
        .once('value')
        .then(data => data.val())
    } else {
      console.log(this.userIdError);
    }
  }

  // Write to database read later feeds data
  addFeedsReadLater = async (feedData) => {
    const userId = localStorage.userId;

    if (userId) {
      return await this.database
        .ref(userId + '/readLater/')
        .push(feedData)
        .catch(error => {
          console.log('Error: some error, data not added.' + error.message);
        })
    } else {
      console.log(this.userIdError);
    }
  }

  // Delete read later feed from database
  deleteFeedsReadLater = async (feedId) => {
    const userId = localStorage.userId;

    return await this.database.ref(userId + '/readLater/' + feedId)
      .remove()
      .catch(error => console.log('Remove failed' + error.message));
  }

  // Delete all feeds read later from database
  deleteAllFeedsReadLater = async () => {
    const userId = localStorage.userId;

    return await this.database.ref(userId + '/readLater/')
      .remove()
      .catch(error => console.log('Remove failed' + error.message));
  }
  
}

export default Firebase;