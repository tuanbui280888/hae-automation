class Calculator {
    tapButton(button) {
        let buttonLocator;
        switch (button) {
            case "ac":
                buttonLocator = $(`accessibility id:all clear`);
                break;
            case "c":
                buttonLocator = $(`accessibility id:clear`);
                break;
            case "+":
                buttonLocator = $(`accessibility id:add`);
                break;
            case "-":
                buttonLocator = $(`accessibility id:subtract`);
                break;
            case "x":
                buttonLocator = $(`accessibility id:multiply`);
                break;
            case "/":
                buttonLocator = $(`accessibility id:divide`);
                break;
            case "=":
                buttonLocator = $(`accessibility id:equals`);
                break;
            default:
                buttonLocator = $(`accessibility id:${button}`);
        }
        buttonLocator.click();
    };
}
module.exports = new Calculator();