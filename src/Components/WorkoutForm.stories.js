import WorkoutForm from './WorkoutForm'


export default {
	title: 'Form/WorkoutForm',
	component: WorkoutForm
}


export const example = () => (
	<WorkoutForm 
		excercise="deadlift" 
		weight="120"
		onSubmit={() => console.log('Did we work?')}
	/>
)