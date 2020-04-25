import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

class CampsiteInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campsite: null
        }
    }
    renderComments(comments){
        if(comments){
            return(
                <div className="col-med-5 m-1" >
                    <h4>Comments</h4>
                    {comments.map(comment =>
                        <div key= {comment.id}>
                            {comment.text}{comment.author}
                            {new Intl.DateTimeFormat('en-US', 
                            { year: 'numeric',
                            month: 'short', 
                            day: '2-digit'})
                            .format(new Date
                            (Date.parse(comment.date)))}
                        </div>)}
                </div>
            )
        }
        return <div></div>
    }
    render() {
            if (this.state.campsite !== null) {
                return (
                <div class="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderCampsite(this.props.campsite.comments)}
                </div>
                )             
                }else{
                    return <div></div>;
            }
    }
}


export default CampsiteInfo;