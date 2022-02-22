import { Entity } from "../../core/domain/Entity";

type CorretionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;
}

class Correction extends Entity<CorretionProps> {
    private constructor(props: CorretionProps, id?: string) {
        super(props, id);
    }

    static     create(props: CorretionProps, id?: string) {
        const correction = new Correction(props, id);

        return correction;
    }
}