import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const userToken = await AsyncStorage.getItem(
            `${this.namespace}:secred`
        );
        return userToken;
    }



    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:secred`, accessToken
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:secred`);
    }
}

export default AuthStorage;