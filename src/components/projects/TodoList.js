import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const { todoList: todoListIMG } = require('../../../img-data');

const name = 'Todo-list';
const projSkills = [skills.frontEnd];
const projTech = [
	tech.react,
	tech.html,
	tech.scss,
	tech.parcel,
	tech.babel,
	tech.javaScript
];

const TodoList = props => (
	<Project
		code='https://github.com/Brandons42/todo-list'
		desc={
			<p>
				A quick and easy todo-list website that uses JavaScript's local storage
				feature to remember tasks from session to session.
			</p>
		}
		href='https://brandons42.github.io/todo-list/'
		imgs={[todoListIMG]}
		name={name}
		onClickTag={props.onClickTag}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default TodoList;

export const todoList = {
	Component: TodoList,
	name,
	projSkills,
	projTech
};
