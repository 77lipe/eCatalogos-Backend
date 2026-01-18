import { CountProductsBdd } from "./CountProductBdd"

export class CountProductService {
    private repository = new CountProductsBdd()

    async execute(): Promise<number> {
        const total = await this.repository.execute()
        return total
    }
}