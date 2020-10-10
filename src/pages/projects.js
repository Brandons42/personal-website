import React from 'react';

import Layout from '../components/Layout';
import Tag from '../components/Tag';
import skills from '../skills';
import styles from '../styles/projects.module.scss';
import tech from '../tech';

import { calculator } from '../components/projects/Calculator';
import { fccPortfolio } from '../components/projects/FCCPortfolio';
import { geographist } from '../components/projects/Geographist';
import { google } from '../components/projects/Google';
import { markdown } from '../components/projects/Markdown';
import { memRoll } from '../components/projects/MemRoll';
import { personal } from '../components/projects/Personal';
import { quizWatch } from '../components/projects/QuizWatch';
import { quizWatchDataAnalysis } from '../components/projects/QuizWatchDataAnalysis';
import { todoList } from '../components/projects/TodoList';
import { wordExists } from '../components/projects/WordExists';
import { wordExistsDocs } from '../components/projects/WordExistsDocs';
import { wordSprint } from '../components/projects/WordSprint';

const all = 'All';

const projects = [
	calculator,
	fccPortfolio,
	geographist,
	google,
	markdown,
	memRoll,
	personal,
	quizWatch,
	quizWatchDataAnalysis,
	todoList,
	wordExists,
	wordExistsDocs,
	wordSprint
];

const skillList = Object.values(skills);
const techList = Object.values(tech);

export default class Projects extends React.Component {
	state = { projects, skill: all, tech: [] };

	selectSkill = skill => {
		let nextProjects = projects;

		if (skill !== all) {
			nextProjects = nextProjects.filter(({ projSkills }) =>
				projSkills.includes(skill)
			);
		}

		if (this.state.tech.length > 0) {
			nextProjects = nextProjects.filter(({ projTech }) =>
				this.state.tech.some(tag => projTech.includes(tag))
			);
		}

		this.setState({ projects: nextProjects, skill });
	};

	selectTag = tag => {
		const techState = [...this.state.tech];

		if (techState.includes(tag)) {
			techState.splice(techState.indexOf(tag), 1);
		} else {
			techState.push(tag);
		}

		let nextProjects = projects;

		if (this.state.skill !== all) {
			nextProjects = nextProjects.filter(({ projSkills }) =>
				projSkills.includes(this.state.skill)
			);
		}

		if (techState.length > 0) {
			nextProjects = nextProjects.filter(({ projTech }) =>
				techState.some(tag => projTech.includes(tag))
			);
		}

		this.setState({
			projects: nextProjects,
			tech: techState
		});
	};

	render() {
		return (
			<Layout title='Projects'>
				<div className={styles.container}>
					<div className={styles.title}>
						<h2>Personal Projects</h2>
						<p>Hi</p>
					</div>
					<div className={styles.content}>
						<div className={styles.navBar}>
							<h3>Filter by skills</h3>
							<div className={styles.indent}>
								{[all, ...skillList].map((text, i) => (
									<div
										className={[
											styles.skill,
											this.state.skill === text
												? styles.selectedSkill
												: styles.unselectedSkill
										].join(' ')}
										key={i}
										onClick={() => this.selectSkill(text)}
									>
										<p>{text}</p>
									</div>
								))}
							</div>
							<h3>Filter by technologies</h3>
							<div className={styles.indent}>
								{techList.map((text, i) => (
									<Tag
										key={i}
										onClick={this.selectTag}
										selected={this.state.tech.includes(text)}
										text={text}
									/>
								))}
							</div>
							<h3>Projects</h3>
							<div className={styles.indent}>
								{this.state.projects.map(({ name }, i) => (
									<p key={i}>
										<a className={styles.link} href={'#' + name}>
											{name}
										</a>
									</p>
								))}
							</div>
						</div>
						<div className={styles.projects}>
							{this.state.projects.map(({ Component }, i) => (
								<Component
									cursor
									key={i}
									onClickTag={this.selectTag}
									selectedTags={this.state.tech}
								/>
							))}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
