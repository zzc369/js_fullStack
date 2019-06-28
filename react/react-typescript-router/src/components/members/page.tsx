import * as React from 'react';
import { memberAPI } from '../../api/member'
import { MemberEntity } from '../../model'
import { members } from '../../api/member/mockData';
import { MenberHeader } from './menberHeader'
import { MemberRow } from './MemberRow'
interface State {
  members: MemberEntity[]
}
interface Props {

}
export class MembersPage extends React.Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }
  public componentDidMount () {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({
          members
        })
      })
  }
  public render() {{
      return (
        <div>
          <table className="table">
            <thead></thead>
            <tbody>
              <MenberHeader />
              {
                this.state.members.map(
                  (member) => 
                  <MemberRow key={member.id} member={member} />
                )
              }
            </tbody>
          </table>
        </div>
      )
  }}
}

// const MemberRow = (member: MemberEntity) => {
//   return (
//     <tr key={member.id}>
//       <td>
//         <img src={member.avatar_url} alt="" className="avatar" />
//       </td>
//       <td><span>{member.id}</span></td>
//       <td><span>{member.login}</span></td>
//     </tr>
//   )
// } 