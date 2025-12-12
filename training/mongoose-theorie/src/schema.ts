import { Model, model, Schema } from "mongoose";

class BlahBlah {
    private firstName: string;
    private lastName: string;

    set fullName(value) {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


const blablah = new BlahBlah();
blablah.fullName = "test";


const addressSchema = new Schema({
    street: {
        type: String,

    },
    number: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    box: {
        type: String
    }
})


// Défini la structure de l'instance du document
interface UserInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    daysConnected: number,
    address: {
        street: string,
        number: number,
        country: string,
        city: string,
        box: string
    }
}

// L'interface qui défini les méthodes liées à l'instance du document
interface UserMethodsInterface {
    getFullName(): string;
}

// Une virtuelle, équivalente à un getter/setter d'une classe
interface UserVirtualsInterface {
    fullName: string;
}

// Interface qui défini les méthodes statiques liées au Modèle
interface UserStaticsInterface {
    findAndSave(id:string, data: Partial<UserInterface>): Promise<void>;
}

const schema = new Schema<
    // La structure du document
    UserInterface,
    // Le modèle
    Model<UserInterface>,
    // Les méthodes
    UserMethodsInterface,
    {},
    UserVirtualsInterface,
    // Les méthodes statiques
    UserStaticsInterface
    >({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    daysConnected: {
        required: false,
        type: Number,
        min: 0,
        max: 3000
    },
    address: {
        type: addressSchema
    }
}, {
    methods: {
        getFullName() {
            if(!this.firstName || ! this.lastName) {
                return 'Anonymous';
            }
            return this._id + ' ' + this.firstName + ' ' + this.lastName;
        }
    },
    statics: {
        // Récupère le record, le modifie et le sauvegarde
        async findAndSave(id: string, data: UserInterface) {
            const record = await this.findById(id);
            
            // Mettre les propriétés de data dans le record
            Object.assign(record, data);

            await record.save();
        }
    },
    virtuals: {
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value: string) {
                this.firstName = value.split(" ")[0];
                this.lastName = value.split(" ")[1];
            }
        }
    }
});


const schemaMovies = new Schema({
    plot: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    num_mflix_comments: {
        type: Number,
        required: true
    },   
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    fullplot: {
        type: String,
        required: true
    }, 
    languages: {
        type: [String],
        required: true
    },
    released: {
        type: Date,
        required: true
    },
    directors: {
        type: [String],
        required: true
    },
    writers: {
        type: [String],
        required: true
    },
    awards: {
        type: new Schema({
            wins: {
                type: Number
            },
            nominations: {
                type: Number
            },
            text: {
                type: String
            }
        }),
        required: true
    },
    lastupdated: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imdb: {
        type: {
            rating: {
                type: Number
            },
            votes: {
                type: Number
            },
            id: {
                type: Number
            }
        },
        required: true
    },
    countries: {
        type: [String],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tomatoes: {
        type: Object,
        required: true
    },
    rated: {
        type: String,
        enum : ['PG-18', 'R', 'PG-13', 'RATED', 'PG', 'G', 'APPROVED', 'PASSED']
    } 
});

export const UserModel = model("users", schema);

export const MovieModel = model("movies",schemaMovies)