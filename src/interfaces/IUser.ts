export interface IUser {
    _id: string;
    gender: string;
    name: IName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: IDob;
    registered: IRegistered;
    phone: string;
    cell: string;
    id: IId;
    picture: IPicture;
    nat: string;
}

interface IName {
    title: string;
    first: string;
    last: string;
}

interface ILocation {
    street: string;
    city: string;
    state: string;
    postcode: string;
    cordinates: ICoordinates;
    timezone: ITimezone;
}

interface ICoordinates {
    latitude: string;
    longitude: string;
}

interface ITimezone {
    offset: string;
    description: string;
}

interface ILogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface IDob {
    date: Date;
    age: Number;
}

interface IRegistered {
    date: Date;
    age: Number;
}

interface IId {
    name: string;
    value: string;
}

interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}