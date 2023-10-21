import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

export interface UserProps {
    ogin: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: any,
    hireable: boolean,
    bio: string,
    twitter_username: any,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

interface UserContextProps {
    user: any;
    data: UserProps | null;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    setData: React.Dispatch<React.SetStateAction<any>>;
}

export const GetUserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [data, setData] = useState<UserProps | null>(null);

    useEffect(() => {
        if (!data) {
            return
        } else {
            localStorage.setItem('data', JSON.stringify(data, null, 4));
        }
    }, [data]);

    return (
        <GetUserContext.Provider value={{ user, data, setUser, setData }}>
            {children}
        </GetUserContext.Provider>
    );
};

export function UseGetContext(): UserContextProps {
    const context = useContext(GetUserContext);

    if (!context) {
        throw new Error('UseGetContext must be used within a UserProvider');
    }

    return context;
};
