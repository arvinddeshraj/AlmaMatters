"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var connection_1 = require("./connection");
// knexConnection.schema.renameTable('old_users', 'users').then(_ => console.log('done !!!'))
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // await knexConnection.schema.createTable('POST', table => {
            //   table.increments();
            //   table.string('post_ID', 12);
            //   table.string('roll_no', 12);
            //   table.string('first_name', 15);
            //   table.string('middle_name', 15);
            //   table.string('last_name', 15);
            //   table.text('desc');
            //   table.dateTime('date');
            //   table.string('media');
            //   table.timestamps();
            // });
            // await knexConnection.schema.createTable('POST_ACTIVITY', table => {
            //   table.increments();
            //   table.string('post_ID',12);
            //   table.string('roll_no',12);
            //   table.text('comment');
            //   table.foreign('post_ID').references('POST.post_ID');
            // });
            // await knexConnection.schema.createTable('WORK_EXP', table => {
            //   table.increments();
            //   table.string('roll_no',12);
            //   table.string('company',256);
            //   table.string('position',100);
            //   table.dateTime('start_date');
            //   table.dateTime('stop_date');
            // });
            // await knexConnection.schema.createTable('INTEREST', table => {
            //   table.increments();
            //   table.string('roll_no',12);
            //   table.text('interest');
            // });
            // await knexConnection.schema.createTable('EVENTS', table => {
            //   table.increments('event_ID');
            //   table.string('roll_no',12);
            //   table.string('event_title',100);
            //   table.dateTime('start_date');
            //   table.dateTime('end_date');
            //   table.text('event_desc');
            //   table.string('media',256);
            //   table.boolean('archived');
            //   table.string('first_name',15);
            //   table.string('middle_name',15);
            //   table.string('last_name',15);
            // });
            // await knexConnection.schema.createTable('LIKES', table => {
            //   table.increments('id');
            //   table.string('post_id', 12);
            //   table.string('roll_no', 12);
            //   table.foreign('post_id').references('POST.post_ID');
            // });
            return [4 /*yield*/, connection_1["default"].schema.createTable('CHATS', function (table) {
                    table.increments('id');
                    table.string('sender', 12);
                    table.string('receiver', 12);
                    table.string('msg', 1000);
                    table.string('time', 12);
                })];
            case 1:
                // await knexConnection.schema.createTable('POST', table => {
                //   table.increments();
                //   table.string('post_ID', 12);
                //   table.string('roll_no', 12);
                //   table.string('first_name', 15);
                //   table.string('middle_name', 15);
                //   table.string('last_name', 15);
                //   table.text('desc');
                //   table.dateTime('date');
                //   table.string('media');
                //   table.timestamps();
                // });
                // await knexConnection.schema.createTable('POST_ACTIVITY', table => {
                //   table.increments();
                //   table.string('post_ID',12);
                //   table.string('roll_no',12);
                //   table.text('comment');
                //   table.foreign('post_ID').references('POST.post_ID');
                // });
                // await knexConnection.schema.createTable('WORK_EXP', table => {
                //   table.increments();
                //   table.string('roll_no',12);
                //   table.string('company',256);
                //   table.string('position',100);
                //   table.dateTime('start_date');
                //   table.dateTime('stop_date');
                // });
                // await knexConnection.schema.createTable('INTEREST', table => {
                //   table.increments();
                //   table.string('roll_no',12);
                //   table.text('interest');
                // });
                // await knexConnection.schema.createTable('EVENTS', table => {
                //   table.increments('event_ID');
                //   table.string('roll_no',12);
                //   table.string('event_title',100);
                //   table.dateTime('start_date');
                //   table.dateTime('end_date');
                //   table.text('event_desc');
                //   table.string('media',256);
                //   table.boolean('archived');
                //   table.string('first_name',15);
                //   table.string('middle_name',15);
                //   table.string('last_name',15);
                // });
                // await knexConnection.schema.createTable('LIKES', table => {
                //   table.increments('id');
                //   table.string('post_id', 12);
                //   table.string('roll_no', 12);
                //   table.foreign('post_id').references('POST.post_ID');
                // });
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main().then(function (_) { return console.log('done!!!'); });
