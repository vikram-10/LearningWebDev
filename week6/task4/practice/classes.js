var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Trial = /** @class */ (function () {
    function Trial(name, age) {
        this.names = name;
        this.ages = age;
    }
    Trial.prototype.nameGetter = function () {
        return this.names;
    };
    return Trial;
}());
var Another = /** @class */ (function (_super) {
    __extends(Another, _super);
    function Another(name, age, genders) {
        var _this = _super.call(this, name, age) || this;
        _this.gender = genders;
        return _this;
    }
    return Another;
}(Trial));
var extraOne = /** @class */ (function (_super) {
    __extends(extraOne, _super);
    function extraOne(name, age, genders, height) {
        var _this = _super.call(this, name, age, genders) || this;
        _this.height = height;
        return _this;
    }
    return extraOne;
}(Another));
var a = new extraOne('Vikram', 20, 'M', 159);
console.log(a.names);
console.log(a.ages);
console.log(a.gender);
console.log(a.height);
