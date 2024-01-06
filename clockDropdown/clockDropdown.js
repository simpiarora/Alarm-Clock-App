import { LightningElement,api } from 'lwc';

export default class ClockDropdown extends LightningElement {

    //child comp for alarmClockApp
    @api label = '';
    @api options = [];
    @api uniqueId = '';

    //runs every time new value chosen.
    changeHandler(event){
        this.callParent(event.target.value);
    }

    //to send the changes from child to parent. Dispatch though custom event.
    callParent(value){
        this.dispatchEvent(new CustomEvent('optionhandler' , {
            detail: {
                label:this.label,
                value:value
            }
        }));
    }

    //public method to reset alarm
    @api reset(value){
        this.template.querySelector('select').value = value;
        this.callParent(value);
    }
}