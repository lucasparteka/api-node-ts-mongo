import listUsers from "../../users.json"
import User from "../models/userModel";
import connectDB from "../database";

const insertUsers = async () => {
    let usersStreetNormalized = listUsers.results.map((user) => {
        let streetNormalized = user.location.street.number + ' ' + user.location.street.name;
        return {...user, location: {...user.location, street: streetNormalized}};
    })
    let result = await User.insertMany(usersStreetNormalized);
    process.exit();
}
connectDB();
insertUsers();