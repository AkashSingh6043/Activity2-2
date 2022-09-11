import mangoose from 'mangoose';
import config from 'config';
import c from 'config';

const db = config.get('mangoURL');

const connectDatatbase = async {} => { try {

    await mangoose.connect(db, {
        useUnifiedTopology: true
    }};
    console.log('connected to mangoose');
} catch {error} {
    console.error{errpr.message};
    process.exit(1);
}
};

export default connectDatatbase;


