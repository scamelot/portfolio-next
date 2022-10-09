import PropTypes from 'prop-types';

const Card = (props) => {
    const style = {
        width: '500px',
        height: '350px',
        borderRadius: '5px'
    }

    const liveLinkStyle = {
        marginLeft: '30px'
    }

    return(
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col align-center">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" style={style} src="/static/images/tasker.gif" alt="tasker" />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mongoose - Express - EJS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
                <p className="leading-relaxed mb-3">Allows authenticated users to log and track their Service-Now ticket completion and duration. Exports to Excel and PDF.</p>
                <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='https://github.com/scamelot/tasker'>Learn More     </a><a style={liveLinkStyle} className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' href="http://techtasker.herokuapp.com">      Live Site</a>
                </div>
            </div>
            </div>
        </div>
        <hr />
       
        <div className="p-4 md:w-1/3">

            <div className="h-full border-5 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col align-center mb-10">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" style={style} src="/static/images/mapp.gif" alt="mapp" />
            <a href="https://github.com/scamelot/mapp2">
            <div className="p-10">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Electron - JAMF API - JS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Macadmin Password Picker</h1>
                <p className="leading-relaxed mb-3">Fetches password of the day and other extension attributes from a JAMF Pro server for a given Mac serial number in an easy-to-use desktop app. Bearer token authentication and session expiration tracking to expedite requests.</p>
                <div className="flex items-center flex-wrap">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-4" href="https://github.com/scamelot/mapp2">Learn More</a>
                </div>
            </div>
            </a>
            </div>
        </div>
        <hr />
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col align-center">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" style={style} src="/static/images/willofthelens.gif" alt="tasker" />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML - CSS - JS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Will of the Lens</h1>
                <p className="leading-relaxed mb-3">The Gallery of Will, shot on Leica.</p>
                <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='https://github.com/scamelot/willofthelens'>Learn More     </a><a style={liveLinkStyle} className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' href="http://willofthelens.com">      Live Site</a>
                </div>
            </div>
            </div>
        </div>
        <hr />
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col align-center">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" style={style} src="/static/images/react-todo.gif" alt="react-todo" />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">React - Express - Mongoose</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">React-Todo</h1>
                <p className="leading-relaxed mb-3">A persistent, database-driven Todo List App built in React and Express. Full-stack CRUD.</p>
                <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://github.com/scamelot/react-todo">Learn More</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    )
}

export default Card
