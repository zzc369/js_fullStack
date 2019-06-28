import * as React from 'react'
import { MemberEntity } from '../../model';

interface Props {
  member: MemberEntity
}

export const MemberRow: React.StatelessComponent<Props> =
({member}) => {
  return (
    <tr>
      <td><img src={member.avatar_url} /></td>
      <td><span>{member.id}</span></td>
      <td><span>{member.login}</span></td>
    </tr>
  )
}