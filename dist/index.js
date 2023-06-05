"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppProvider_1 = require("./provider/AppProvider");
require("reflect-metadata");
(new AppProvider_1.AppProvider())
    .registerRoutes()
    .start();
