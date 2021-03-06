"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_is_1 = require("typescript-is");
const toml_1 = __importDefault(require("toml"));
const fs_1 = require("fs");
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
exports.load = (filename) => {
    console.log("> loading config from", chalk_1.default.yellow(filename));
    try {
        const source = fs_1.readFileSync(filename, "utf8");
        const config = typescript_is_1.assertEquals(toml_1.default.parse(source), object => { var path = ["$"]; function _number(object) { ; if (typeof object !== "number")
            return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
        else
            return null; } function _string(object) { ; if (typeof object !== "string")
            return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
        else
            return null; } function sa__string_ea_10(object) { ; if (!Array.isArray(object))
            return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
            path.push("[" + i + "]");
            var error = _string(object[i]);
            path.pop();
            if (error)
                return error;
        } return null; } function _107(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
            return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
            if ("port" in object) {
                path.push("port");
                var error = _number(object["port"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'port' in object", path: path.slice(), reason: { type: "missing-property", property: "port" } };
        } {
            if ("base_url" in object) {
                path.push("base_url");
                var error = _string(object["base_url"]);
                path.pop();
                if (error)
                    return error;
            }
        } {
            if ("secret_token" in object) {
                path.push("secret_token");
                var error = _string(object["secret_token"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'secret_token' in object", path: path.slice(), reason: { type: "missing-property", property: "secret_token" } };
        } {
            if ("wildduck_api_url" in object) {
                path.push("wildduck_api_url");
                var error = _string(object["wildduck_api_url"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'wildduck_api_url' in object", path: path.slice(), reason: { type: "missing-property", property: "wildduck_api_url" } };
        } {
            if ("wildduck_api_token" in object) {
                path.push("wildduck_api_token");
                var error = _string(object["wildduck_api_token"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'wildduck_api_token' in object", path: path.slice(), reason: { type: "missing-property", property: "wildduck_api_token" } };
        } {
            if ("mongodb_url" in object) {
                path.push("mongodb_url");
                var error = _string(object["mongodb_url"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'mongodb_url' in object", path: path.slice(), reason: { type: "missing-property", property: "mongodb_url" } };
        } {
            if ("extra_locales_dirs" in object) {
                path.push("extra_locales_dirs");
                var error = sa__string_ea_10(object["extra_locales_dirs"]);
                path.pop();
                if (error)
                    return error;
            }
        } return null; } function _false(object) { ; if (object !== false)
            return { message: "validation failed at " + path.join(".") + ": expected false", path: path.slice(), reason: { type: "boolean-literal", value: false } };
        else
            return null; } function _108(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
            return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
            if ("ssl" in object) {
                path.push("ssl");
                var error = _false(object["ssl"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'ssl' in object", path: path.slice(), reason: { type: "missing-property", property: "ssl" } };
        } return null; } function si__107_s__108_s_ei_s(object) { var conditions = [_107, _108]; for (const condition of conditions) {
            var error = condition(object);
            if (error)
                return error;
        } for (const key of Object.keys(object)) {
            if (key !== "port" && key !== "base_url" && key !== "secret_token" && key !== "wildduck_api_url" && key !== "wildduck_api_token" && key !== "mongodb_url" && key !== "extra_locales_dirs" && key !== "ssl")
                return { message: "validation failed at " + path.join(".") + ": " + ("superfluous property '" + key + "' in object"), path: path.slice(), reason: { type: "superfluous-property" } };
        } return null; } function _true(object) { ; if (object !== true)
            return { message: "validation failed at " + path.join(".") + ": expected true", path: path.slice(), reason: { type: "boolean-literal", value: true } };
        else
            return null; } function _109(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
            return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
            if ("ssl" in object) {
                path.push("ssl");
                var error = _true(object["ssl"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'ssl' in object", path: path.slice(), reason: { type: "missing-property", property: "ssl" } };
        } {
            if ("ssl_certificate" in object) {
                path.push("ssl_certificate");
                var error = _string(object["ssl_certificate"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'ssl_certificate' in object", path: path.slice(), reason: { type: "missing-property", property: "ssl_certificate" } };
        } {
            if ("ssl_certificate_key" in object) {
                path.push("ssl_certificate_key");
                var error = _string(object["ssl_certificate_key"]);
                path.pop();
                if (error)
                    return error;
            }
            else
                return { message: "validation failed at " + path.join(".") + ": expected 'ssl_certificate_key' in object", path: path.slice(), reason: { type: "missing-property", property: "ssl_certificate_key" } };
        } return null; } function si__107_s__109_s_ei_s(object) { var conditions = [_107, _109]; for (const condition of conditions) {
            var error = condition(object);
            if (error)
                return error;
        } for (const key of Object.keys(object)) {
            if (key !== "port" && key !== "base_url" && key !== "secret_token" && key !== "wildduck_api_url" && key !== "wildduck_api_token" && key !== "mongodb_url" && key !== "extra_locales_dirs" && key !== "ssl" && key !== "ssl_certificate" && key !== "ssl_certificate_key")
                return { message: "validation failed at " + path.join(".") + ": " + ("superfluous property '" + key + "' in object"), path: path.slice(), reason: { type: "superfluous-property" } };
        } return null; } function su_si__107__108_ei_si__107__109_ei_eu(object) { var conditions = [si__107_s__108_s_ei_s, si__107_s__109_s_ei_s]; for (const condition of conditions) {
            var error = condition(object);
            if (!error)
                return null;
        } return { message: "validation failed at " + path.join(".") + ": there are no valid alternatives", path: path.slice(), reason: { type: "union" } }; } var error = su_si__107__108_ei_si__107__109_ei_eu(object); return error; });
        if (config.extra_locales_dirs) {
            config.extra_locales_dirs = config.extra_locales_dirs.map(f => {
                return path_1.default.resolve(path_1.default.dirname(filename), f);
            });
        }
        return config;
    }
    catch (e) {
        console.error(chalk_1.default.red("Error loading config file: " + e.message));
        process.exit(1);
    }
};
