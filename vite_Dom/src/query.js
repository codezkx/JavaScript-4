(function () {
    function _$(selector) {
        if (!selector) {
            new Error('selector is null');
        }
        this.elements = [];
        let selectorStr = ''
        for (let i = 0, len = selector.length; len > i; i++) {
            const selectorMarkNum = selectorMark(selector[i]);
            if (selectorMarkNum === 0) {
                selectorStr = selector[i].replace('#', '');
                this.elements.push(document.getElementById(selectorStr));
            } else if (selectorMarkNum === 1) {
                selectorStr = selector[i].replace('.', '');
                this.elements.push(document.getElementsByClassName(selectorStr)[0]);
            } else {
                this.elements.push(document.getElementsByTagName(selector[i])[0]);
            }
        }
        return this.elements
    }
    
    _$.prototype = {
        eq: function (elementIndex) {
            let that = this;
            that.elements = [that.elements[elementIndex]];
            return that;
        },

        children: function () {
            let that = this;
            that.elementChildren = [];
            that.elements.forEach((item, index) => {
                that.elementChildren.push(item)
            })
            // childNodes = this.element.childNodes
            return that;
        }

    }

    
    function selectorMark(selectorStr) {
        let selectorMark = null
        // 判断是元素选择器还是类名或者id选择器
        if (['#', '.'].includes(selectorStr[0])) {
            selectorMark = selectorStr[0] === '#' ? 0 : 1
        } else {
            selectorMark = 2
        }
        return selectorMark
    }
    window.$ = function (...arg) {
        return new _$(arg)
    }
})();