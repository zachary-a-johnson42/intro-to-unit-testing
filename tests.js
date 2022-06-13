// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//Unit tests for sayHello
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return, "Hello, Jane!", if passed the string of "Jane"', function (){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    })
    it('should return "Hello, Alex!", if pass the string of "Alex"', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!", if passed the string of "Pat"', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it('should return "Hello, World! if no param is passed through', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!", if passed the bool of true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if passed the bool of false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });

})