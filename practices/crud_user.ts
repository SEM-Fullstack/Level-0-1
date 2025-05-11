type User = {
    username: string;
    email?: string;
    password: string;
};

class UserService {
    private users: User[] = [];

    createUser(user: User) {
        // Check if user already exists
        if (this.users.find(u => u.username === user.username)) {
            throw new Error('User already exists');
        }

        this.users.push(user);
        return user;
    }

    getUser(username?: string, email?: string) {
        let user: User | undefined;
        if (username && email) {
            user = this.users.find(u => u.username === username && u.email === email);
            return user;
        }

        if (username) {
            user = this.users.find(u => u.username === username);
            return user;
        }

        if (email) {
            user = this.users.find(u => u.email === email);
            return user;
        }

        return user;
    }

    updateUser(username: string, user: User) {
        const index = this.users.findIndex(u => u.username === username);
        if (index === -1) {
            throw new Error('User not found');
        }

        this.users[index] = user;
        return user;
    }

    deleteUser(username: string) {
        const index = this.users.findIndex(u => u.username === username);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users.splice(index, 1);
        return true;
    }
}
