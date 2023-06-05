import {AppProvider} from "./provider/AppProvider";
import "reflect-metadata";

const start = async () => {
    await (new AppProvider())
        .registerRoutes()
        .start()
}


start().then(() => console.log('Application started'))
