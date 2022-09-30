const React = require('react')
const Def = require('../default')

    
function show (data) {
    let comments = (
        <h3 className="inactive">
            no comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length) 
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} width="50%" />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2>
                        Rating
                    </h2>
                    {rating}
                    <br />
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>     
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form> 
                </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <div className="row">
              {comments}
            </div>
            <hr />
            <h2> Got Something to say?</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" id="content" name="content" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant?</label>
                        <input className="form-control" type= "checkbox" id="rant" name="rant" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show
