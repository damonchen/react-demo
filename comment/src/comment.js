var data = [
    {author: 'Pete Hunt', text: "this is one comment"},
    {author: 'Jordan Walke', text: 'this is *another* comment.'}
];

var Comment = React.createClass({
    render: function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return (

            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
})

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function (comment){
           return (
             <Comment author={comment.author}>
                {comment.text}
               </Comment>  
           );
        });
        
        return (
            <div> {commentNodes} </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="CommentForm">
            Hello, world! I am a CommentForm
            </div>
        );
    }
});




var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});



React.render(
    <CommentBox data={data} />,
    document.getElementById('content')
)