const TaskList = () => {

    const tasks = [
        { taskName: "Learn about Agentic AI", completed: false},
        { taskName: "Learn about and use React", completed: true},
        { taskName: "Learn about Next.js", completed: false},
        { taskName: "Learn about Spec-Driven Development", completed: true}
    ];

    return (
        <div>
            <h3 className="task-list-heading">Your Task List:</h3>
                <ul className="task-list">
                    {tasks.map(task => {
                        if (task.completed === true) {
                            return <li key={task.taskName} className="completed-list-item" style={ {color: "green"} }>Task: {`${task.taskName}`} - Completed ✅</li>
                        } else {
                            return <li key={task.taskName} className="incomplete-list-item">Task: {`${task.taskName}`} - Not completed ❌</li>
                        }
                    })}
                </ul>
        </div>
    )

}

export default TaskList;