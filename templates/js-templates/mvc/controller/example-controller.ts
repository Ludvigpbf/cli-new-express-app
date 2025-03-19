// example controller
import { exampleView } from '../view/example-view';
import { exampleModel } from '../model/example-model';


export const exampleController = {
    init: function () {
        exampleView.init();
        exampleModel.init();
    }
};