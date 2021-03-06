var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import {Link} from 'react-router';

export var PostPreview = React.createClass({
  render: function(){
    var {id, title, text, coverImage, author, created, dispatch} = this.props;
    var linkUrl = '/post/'+id.toString();
    coverImage = coverImage ? coverImage : 'url(images/road.jpg)';
    var styles = {
      backgroundImage: coverImage
    };

    var linkUrl = '/post/'+id.toString();

    //todo
    // convert created to time passed eg. '2 days ago' instead of a date dated to 2 days ago

    return (
      <div className="mdl-card mdl-cell mdl-cell--12-col">
        <div className="mdl-card__media mdl-color-text--grey-50" style={styles}>
          <h3><Link to={linkUrl}>{title}</Link></h3>
        </div>
        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
          {text}
        </div>
        <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
          <div className="minilogo"></div>
          <div>
            <strong>The Blog</strong>
            <span>{created}</span>
          </div>
        </div>
      </div>
    )
  }
});

export default connect()(PostPreview);

// 2/3 width post

// <div className="mdl-card coffee-pic mdl-cell mdl-cell--8-col">
//   <div className="mdl-card__media mdl-color-text--grey-50">
//     <h3><a href="entry.html">Coffee Pic</a></h3>
//   </div>
//   <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
//     <div className="minilogo"></div>
//     <div>
//       <strong>The Newist</strong>
//       <span>2 days ago</span>
//     </div>
//   </div>
// </div>

// 1/3 width post

// <div className="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop">
//   <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent">
//     <i className="material-icons mdl-color-text--white" role="presentation">add</i>
//     <span className="visuallyhidden">add</span>
//   </button>
//   <div className="mdl-card__media mdl-color--white mdl-color-text--grey-600">
//     <img src="images/logo.png"/>
//     +1,337
//   </div>
//   <div className="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
//     <div>
//       <strong>The Newist</strong>
//     </div>
//     <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="menubtn">
//       <li className="mdl-menu__item">About</li>
//       <li className="mdl-menu__item">Message</li>
//       <li className="mdl-menu__item">Favorite</li>
//       <li className="mdl-menu__item">Search</li>
//     </ul>
//     <button id="menubtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
//       <i className="material-icons" role="presentation">more_vert</i>
//       <span className="visuallyhidden">show menu</span>
//     </button>
//   </div>
// </div>


// 100% width post

// <div className="mdl-card on-the-road-again mdl-cell mdl-cell--12-col">
//   <div className="mdl-card__media mdl-color-text--grey-50">
//     <h3><a href="entry.html">On the road again</a></h3>
//   </div>
//   <div className="mdl-color-text--grey-600 mdl-card__supporting-text">
//     Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//   </div>
//   <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
//     <div className="minilogo"></div>
//     <div>
//       <strong>The Newist</strong>
//       <span>2 days ago</span>
//     </div>
//   </div>
// </div>
//
// <div className="mdl-card amazing mdl-cell mdl-cell--12-col">
//   <div className="mdl-card__title mdl-color-text--grey-50">
//     <h3 className="quote"><a href="entry.html">I couldn’t take any pictures but this was an amazing thing…</a></h3>
//   </div>
//   <div className="mdl-card__supporting-text mdl-color-text--grey-600">
//     Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//   </div>
//   <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
//     <div className="minilogo"></div>
//     <div>
//       <strong>The Newist</strong>
//       <span>2 days ago</span>
//     </div>
//   </div>
// </div>
//
// <div className="mdl-card shopping mdl-cell mdl-cell--12-col">
//   <div className="mdl-card__media mdl-color-text--grey-50">
//     <h3><a href="entry.html">Shopping</a></h3>
//   </div>
//   <div className="mdl-card__supporting-text mdl-color-text--grey-600">
//     Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//   </div>
//   <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
//     <div className="minilogo"></div>
//     <div>
//       <strong>The Newist</strong>
//       <span>2 days ago</span>
//     </div>
//   </div>
// </div>
