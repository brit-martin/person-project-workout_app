import { sequelize, Exercise, Program, Schedule, Goal, User} from "../models/model.js"
import { Op } from 'sequelize'
const exercises = [
    {
        name: 'Sumo Squat',
        reps: '8-10',
        sets: 4,
        category: 'Quads'
    },
    {
        name: 'Glute Bridge',
        reps: '10-12',
        sets: 4,
        category: "Glutes"
    },
    {
        name: 'Leg Press',
        reps: '8',
        sets: 4,
        category: 'Quads'
    },
    {
        name: 'Reverse Lunge',
        reps: '10 each leg',
        sets: 3,
        category: 'Quads'
    },
    {
        name: 'Box Jumps',
        reps: '12-14',
        sets: 4,
        category: 'Quads'
    },
    {
        name: 'Glute Pullthroughs',
        reps: '12',
        sets: 3,
        category: 'Glutes'
    },
    {
        name: 'Sumo Squat',
        reps: '8-10',
        sets: 4,
        category: 'Hamstrings'
    },
    {
        name: 'Barbell Squats',
        reps: '8-10',
        sets: 4,
        category: 'Hamstrings'
    },
    {
        name: 'Single Leg Deadlift',
        reps: '8-10',
        sets: 4,
        category: 'Hamstrings'
    },
    {
        name: 'Hamstring Curl',
        reps: '8-10',
        sets: 4,
        category: 'Hamstrings'
    },
    {
        name: 'Single Leg Hamstring Curl',
        reps: '8-10 Each Leg',
        sets: 4,
        category: 'Hamstrings'
    },
    {
        name: 'Glute Abductions',
        reps: '12-15',
        sets: 3,
        category: 'Glutes'
    },
    {
        name: 'Quad Extensions',
        reps: '10-12',
        sets: 3,
        category: 'Quads'
    },
    {
        name: 'Bicep Curls',
        reps: '10-12 each arm',
        sets: 4,
        category: 'Biceps'
    },
    {
        name: 'Hammerhead Curl',
        reps: '10-12 each arm',
        sets: 4,
        category: 'Biceps'
    },
    {
        name: 'Inverted Bicep Curl',
        reps: '20',
        sets: 3,
        category: 'Biceps'
    },
    {
        name: 'Back Fly',
        reps: '8-10',
        sets: 4,
        category: 'Back'
    },
    {
        name: 'Seated Cable Row',
        reps: '10',
        sets: 4,
        category: 'Back'
    },
    {
        name: 'Lat Pull Downs',
        reps: '10-12',
        sets: 4,
        category: 'Back'
    },
    {
        name: 'Assisted Pull ups',
        reps: '10',
        sets: 4,
        category: 'Back'
    },
    {
        name: 'Single Arm Lat Pull Down',
        reps: '10',
        sets: 3,
        category: 'Back'
    },
    {
        name: 'Romanian Deadlift',
        reps: '8-10',
        sets: 4,
        category: 'Back'
    },
    {
        name: 'Plank',
        reps: '1 minute',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Russian Twists',
        reps: '30',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Mountain Climbers',
        reps: '40',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Tricep Pullover',
        reps: '10-12',
        sets: 4,
        category: 'Tricep'
    },
    {
        name: 'Skull Crusher',
        reps: '10-12',
        sets: 3,
        category: 'Tricep'
    },
    {
        name: 'Seated Shoulder Press',
        reps: '10-12',
        sets: 3,
        category: 'Shoulders'
    },
    {
        name: 'Lying Bench Press',
        reps: '10-12',
        sets: 4,
        category: 'Chest'
    },
    {
        name: 'Incline Lateral Raise',
        reps: '8-10',
        sets: 3,
        category: 'Shoulder'
    },
    {
        name: 'Front Raises',
        reps: '8-10',
        sets: 3,
        category: 'Shoulder'
    },
    {
        name: 'Upright Row',
        reps: '8-10',
        sets: 3,
        category: 'Shoulder'
    },
    {
        name: 'T-bar Row',
        reps: '8-10',
        sets: 3,
        category: 'Back'
    },
    {
        name: 'Pushups',
        reps: '10-12',
        sets: 4,
        category: 'Chest'
    },
    {
        name: 'Incline Fly',
        reps: '10',
        sets: 3,
        category: 'Chest'
    }, 
    {
        name: 'Dumbbell Pullover',
        reps: '10-12',
        sets: 3,
        category: 'Chest'
    }, 
    {
        name: 'Standing Cross-body Dumbbell raise',
        reps: '10 each arm',
        sets: 3,
        category: 'Chest'
    },
    {
        name: 'Deadbug',
        reps: '12',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'V-up',
        reps: '15',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Flutter Kicks',
        reps: '35',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Sit-ups',
        reps: '15',
        sets: 3,
        category: 'Abs'
    },
    {
        name: 'Burpee',
        reps: '15',
        sets: 3,
        category: 'Cardio'
    },
    {
        name: 'Squat Jumps',
        reps: '18',
        sets: 3,
        category: 'Cardio'
    },
    {
        name: 'Jumping Jacks',
        reps: '50',
        sets: 3,
        category: 'Cardio'
    },
    {
        name: 'Squat Jumps',
        reps: '18',
        sets: 3,
        category: 'Cardio'
    },
    {
        name: 'Step Ups',
        reps: '25',
        sets: 3,
        category: 'Cardio'
    },
]

const users = [
    {
        name: 'Brittany Martin',
    }
]

const programs = [
    {
        name: 'Glutes & Quads',
    },
    {
        name: 'Back & Biceps',
    },
    {
        name: 'Abs & Cardio',
    },
    {
        name: 'Glutes & Hamstrings',
    },
    {
        name: 'Chest & Tricepts',
    },
    {
        name: 'Shoulders & Abs'
    },
    {
        name: 'Cardio'
    },
    {
        name: 'Chest & Shoulders'
    },
]

const schedules = [
    {   
        date: '1/1/24',
        
    },
    {   
        date: '1/2/24',
        
    },
    {   
        date: '1/3/24',
        
    },
    {   
        date: '1/4/24',
       
    },
    {   
        date: '1/5/24',
        
    },
]

const goals = [

]




await sequelize.sync({ force: true })

await Exercise.bulkCreate(exercises)
await User.bulkCreate(users)

const newPrograms = await Program.bulkCreate(programs)
const newSchedules = await Schedule.bulkCreate(schedules)
for(let i =0; i < newSchedules.length; i ++){
    await newSchedules[i].setProgram(newPrograms[i])    
}


const GlutesAndQuadsProgram = await Program.findOne({
    where: { name: 'Glutes & Quads'}
})
const GlutesAndQuadsExercises = await Exercise.findAll ({
    where: { category: { [Op.or]: ['Quads','Glutes']}}

})
for (let i = 0; i < GlutesAndQuadsExercises.length; i++){
    await GlutesAndQuadsExercises[i].addProgram(GlutesAndQuadsProgram)
}


const BackAndBicepsProgram = await Program.findOne({
    where: {name: 'Back & Biceps'}
})
const BackAndBicepsExercises = await Exercise.findAll ({
    where: { category: { [Op.or]: ['Back', 'Biceps']}}
})
for (let i =0; i < BackAndBicepsExercises.length; i++){
    await BackAndBicepsExercises[i].addProgram(BackAndBicepsProgram)
}


const AbsAndCardioProgram = await Program.findOne({
    where: { name: 'Abs & Cardio'}
})
const AbsAndCardioExercises = await Exercise.findAll({
    where: { category : {[Op.or]: ['Abs', 'Cardio']}}
})
for (let i=0; i < AbsAndCardioExercises.length; i++){
    await AbsAndCardioExercises[i].addProgram(AbsAndCardioProgram)
}


const GlutesAndHamstringsProgram = await Program.findOne({
    where: { name: 'Glutes & Hamstrings'}
})
const GlutesAndHamstringsExercises = await Exercise.findAll({
    where: {category: {[Op.or]: ['Glutes', 'Hamstrings']}}
})
for (let i=0; i < GlutesAndHamstringsExercises.length; i++){
    await GlutesAndHamstringsExercises[i].addProgram(GlutesAndHamstringsProgram)
}





await Goal.bulkCreate(goals)

await sequelize.close()