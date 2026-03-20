import { Component } from '@angular/core';
import { Supports } from "../../components/support-component/supports/supports";
import { Featuress } from "../../components/feature-component/featuress/featuress";

@Component({
  selector: 'app-support',
  imports: [Supports, Featuress],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support {

}
