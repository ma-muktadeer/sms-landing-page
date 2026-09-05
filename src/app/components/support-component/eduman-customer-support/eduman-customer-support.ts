import { Component } from '@angular/core';
import { SupprotsAIHelpDesk } from "../supprots-ai-help-desk/supprots-ai-help-desk";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-eduman-customer-support',
  imports: [SupprotsAIHelpDesk, NgOptimizedImage],
  templateUrl: './eduman-customer-support.html',
  styleUrl: './eduman-customer-support.css',
})
export class EdumanCustomerSupport {

}
