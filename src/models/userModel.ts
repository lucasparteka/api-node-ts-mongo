import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
      index: true,
    },
    name: {
        title: {
            type: String, 
            required: true,
        },
        first: {
            type: String, 
            required: true,
        },
        last: {
            type: String, 
            required: true,
        },
      },
    location: {
        street: {
            type: String, 
            required: true,
        },
        city: {
            type: String, 
            required: true,
        },
        state: {
            type: String, 
            required: true,
        },
        postcode: {
            type: String, 
            required: true,
        },
        coordinates: {
            latitude: {
                type: String, 
                required: true,
            },
            longitude: {
                type: String, 
                required: true,
            },
        },
        timezone: {
            offset: {
                type: String, 
                required: true,
            },
            description: {
                type: String, 
                required: false,
            },
        },
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    login: {
        uuid: {
            type: String, 
            required: true,
        },
        username: {
            type: String, 
            required: true,
        },
        password: {
            type: String, 
            required: true,
        },
        salt: {
            type: String, 
            required: true,
        },
        md5: {
            type: String, 
            required: true,
        },
        sha1: {
            type: String, 
            required: true,
        },
        sha256: {
            type: String, 
            required: true,
        }
    },
    dob: {
        date: {
            type: Date, 
            required: true,
        },
        age: {
            type: Number, 
            required: true,
        }
    },
    registered: {
        date: {
            type: Date, 
            required: true,
        },
        age: {
            type: Number, 
            required: true,
        }
    },
    phone: {
        type: String, 
        required: false,
    },
    cell: {
        type: String, 
        required: true,
    },
    id: {
        name: {
            type: String, 
        },
        value: {
            type: String, 
        }
    },
    picture: {
        large: {
            type: String, 
            required: true,
        },
        medium: {
            type: String, 
            required: true,
        },
        thumbnail: {
            type: String, 
            required: true,
        }
    },
    nat: {
        type: String,
        required: true
    }
  }, {id:false}
);

export default mongoose.model('User', User);
