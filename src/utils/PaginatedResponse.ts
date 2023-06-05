export class PaginatedResponse {

    public constructor(
        private result: any,
        private total: number,
        private page: number,
        private limit: number,
    ) {
    }

    public toJSON() {
        return {
            data: this.result,
            total: this.total,
            page: this.page,
            perPage: this.limit
        }
    }
}
