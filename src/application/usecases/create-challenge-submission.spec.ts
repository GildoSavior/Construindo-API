import { InMemoryStudentRepository } from '../../../Test/repositories/in-memory-student-repositories';
import { InMemoryChallengeRepository } from '../../../Test/repositories/in-memory-challenges-repositories';
import { CreateChallengeSubmission } from './create-challenge-submission'
import { Student } from '../../domain/entities/student';
import { Challenge } from '../../domain/entities/challenge';

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentRepository = new InMemoryStudentRepository();
        const challengetRepository = new InMemoryChallengeRepository();

        const student =  Student.create({
            name: 'Gildo salvador',
            email: 'gildosalva.pe@gmail.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 1',
            instructionsUrl: 'htpps://challenge1.com'
        })

        studentRepository.items.push(student)
        challengetRepository.items.push(challenge)

        const createchallengeSubmission = new CreateChallengeSubmission(
            studentRepository, 
            challengetRepository
        );

        const response = await createchallengeSubmission.execute({
            studentId: student.id,
            challengeId: challenge.id,
        });

        expect(response).toBeTruthy();
    })
})