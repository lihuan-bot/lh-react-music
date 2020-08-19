import LHDiscover from '@/pages/discover'
import LHFriend from '@/pages/friend'
import LHMine from '@/pages/mine'

const routes = [
{
  path: '/',
  exact: true,
  component: LHDiscover
},
{
  path: '/mine',
  component: LHMine
},
{
  path: '/friend',
  component: LHFriend
},
];
export default routes