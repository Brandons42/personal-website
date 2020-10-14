import React from 'react';

import Layout from '../components/Layout';
import ProgramLogo from '../components/ProgramLogo';
import Tag from '../components/Tag';
import programs from '../programs';
import projects from '../projects';
import skills from '../skills';
import styles from '../styles/projects.module.scss';
import tech from '../tech';

const all = 'All';

const programList = Object.values(programs);
const skillList = Object.values(skills);
const techList = Object.values(tech);

export default class Projects extends React.Component {
	constructor() {
		super();

		this.state = { projects, skill: all, tech: [] };

		const params = new URLSearchParams(document.location.search.substring(1));
		const program = params.get('program');

		if (
			program &&
			programList.map(programObj => programObj.name).includes(program)
		) {
			this.state.program = program;
			this.state.projects = this.filterByProgram(this.state.projects);
		}
	}

	filterByProgram = (projects, program = this.state.program) =>
		program
			? projects.filter(
					project => project.projProgram && project.projProgram.name === program
			  )
			: projects;

	filterBySkill = (projects, skill = this.state.skill) =>
		skill === all
			? projects
			: projects.filter(({ projSkills }) => projSkills.includes(skill));

	filterByTech = (projects, tech = this.state.tech) =>
		tech.length === 0
			? projects
			: projects.filter(({ projTech }) =>
					tech.some(tag => projTech.includes(tag))
			  );

	selectProgram = program => {
		const programState = this.state.program === program ? false : program;

		let nextProjects = projects;

		nextProjects = this.filterByProgram(nextProjects, programState);
		nextProjects = this.filterBySkill(nextProjects);
		nextProjects = this.filterByTech(nextProjects);

		this.setState({ projects: nextProjects, program: programState });
	};

	selectSkill = skill => {
		let nextProjects = projects;

		nextProjects = this.filterByProgram(nextProjects);
		nextProjects = this.filterBySkill(nextProjects, skill);
		nextProjects = this.filterByTech(nextProjects);

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

		nextProjects = this.filterByProgram(nextProjects);
		nextProjects = this.filterBySkill(nextProjects);
		nextProjects = this.filterByTech(nextProjects, techState);

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
						{window.innerWidth > 1100 && (
							<div className={styles.navBar}>
								<h3>Filter by program</h3>
								<div className={styles.indent}>
									{programList.map((program, i) => (
										<ProgramLogo
											key={i}
											onClick={this.selectProgram}
											program={program}
											state={this.state.program}
										/>
									))}
								</div>
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
						)}
						<div className={styles.projects}>
							{this.state.projects.length > 0 ? (
								this.state.projects.map(({ Component }, i) => (
									<Component
										cursor
										key={i}
										onClickProgram={this.selectProgram}
										onClickTag={this.selectTag}
										programState={this.state.program}
										selectedTags={this.state.tech}
									/>
								))
							) : (
								<div className={styles.none}>
									<p>
										Unfortunately, it seems that there are no projects that
										match the filter criteria you entered. Try adjusting the
										filters to produce relevant results.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
