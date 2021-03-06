class HomeForumRecentList extends React.Component {
  render() {
    var post_count = 0
    return(
      <table className="data table table-striped no-margin">
        <thead>
          <tr>
            <th>#</th>
            <th>Post</th>
            <th>Author</th>
            <th className="hidden-phone">Responses</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.recent.map((post, i) => {
              post_count += 1
              return (<HomeForumRecentPost post_count={post_count} data={post} key={i}/>)
            })
          }
        </tbody>
      </table>
    );
  }

}
