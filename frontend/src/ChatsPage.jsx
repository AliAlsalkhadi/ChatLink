import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return ( 
        <div style={{height: '100vh' }}>
            <PrettyChatWindow
            projectId="9576e291-4436-4a2f-a24f-6d926ee83de2"
            username= {props.user.username}
            secret= {props.user.secret}
            style={{ height: '100vh' }}
          />
        </div>
    )
}

export default ChatsPage