let page = {
    title: "test-content",
    _content: '',
    setContent(value) {
        this._content = value;
    },
    getContent() {
        return this._content;
    },
    render: function() {
        document.write(this._content);
    }
}

page.setContent('<div>New content set</div>');
console.log(page.getContent() );
page.render();

export default Oop;