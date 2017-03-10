import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title="props are cool" color='rebeccapurple' />
        <MyTitle title="props are amazing" color='aquamarine' />
        <MyTitle title="props are the best" color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
