import { Student } from '../../domain/entities/student'

export interface StudentRepository {
    findById(id: string): Promise<Student | null>
}