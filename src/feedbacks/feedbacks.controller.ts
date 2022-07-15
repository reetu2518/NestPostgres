import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Feedback } from "src/entity/feedback.entity";
import { FeedbacksService } from "./feedbacks.service";

@Controller()
export class FeedbacksController {

    constructor(private feedbacksService: FeedbacksService) {}

    @Get()
    getAllFeedbacks() : Promise<Feedback[]> {
        return this.feedbacksService.getFeedbacks();
    }

    @Post()
    create(@Body() feedback:Feedback) {
        return this.feedbacksService.addFeedback(feedback);
    }

    @Get(':id')
    getOneFeedback(@Param('id') id:number): Promise<Feedback> {
        return this.feedbacksService.findOne(Number(id));
    }

    @Post()
    update(@Body() id:number, feedback:Feedback) {
        return this.feedbacksService.update(id, feedback);
    }

    
    @Delete()
    delete(@Body() id:number) {
        return this.feedbacksService.delete(id);
    }

}