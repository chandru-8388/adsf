({
    doInit : function(component, event, helper) {
        helper.initialize(component);
    },
    runBatch1 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch1(component, size);
        } else {
            component.set('v.message', 'No records for batch 1');
        }
    },
    validate1 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue1(value);
        component.set('v.message', isValid ? 'Valid 1' : 'Invalid 1');
    },
    runBatch2 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch2(component, size);
        } else {
            component.set('v.message', 'No records for batch 2');
        }
    },
    validate2 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue2(value);
        component.set('v.message', isValid ? 'Valid 2' : 'Invalid 2');
    },
    runBatch3 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch3(component, size);
        } else {
            component.set('v.message', 'No records for batch 3');
        }
    },
    validate3 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue3(value);
        component.set('v.message', isValid ? 'Valid 3' : 'Invalid 3');
    },
    runBatch4 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch4(component, size);
        } else {
            component.set('v.message', 'No records for batch 4');
        }
    },
    validate4 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue4(value);
        component.set('v.message', isValid ? 'Valid 4' : 'Invalid 4');
    },
    runBatch5 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch5(component, size);
        } else {
            component.set('v.message', 'No records for batch 5');
        }
    },
    validate5 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue5(value);
        component.set('v.message', isValid ? 'Valid 5' : 'Invalid 5');
    },
    runBatch6 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch6(component, size);
        } else {
            component.set('v.message', 'No records for batch 6');
        }
    },
    validate6 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue6(value);
        component.set('v.message', isValid ? 'Valid 6' : 'Invalid 6');
    },
    runBatch7 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch7(component, size);
        } else {
            component.set('v.message', 'No records for batch 7');
        }
    },
    validate7 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue7(value);
        component.set('v.message', isValid ? 'Valid 7' : 'Invalid 7');
    },
    runBatch8 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch8(component, size);
        } else {
            component.set('v.message', 'No records for batch 8');
        }
    },
    validate8 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue8(value);
        component.set('v.message', isValid ? 'Valid 8' : 'Invalid 8');
    },
    runBatch9 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch9(component, size);
        } else {
            component.set('v.message', 'No records for batch 9');
        }
    },
    validate9 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue9(value);
        component.set('v.message', isValid ? 'Valid 9' : 'Invalid 9');
    },
    runBatch10 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch10(component, size);
        } else {
            component.set('v.message', 'No records for batch 10');
        }
    },
    validate10 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue10(value);
        component.set('v.message', isValid ? 'Valid 10' : 'Invalid 10');
    },
    runBatch11 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch11(component, size);
        } else {
            component.set('v.message', 'No records for batch 11');
        }
    },
    validate11 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue11(value);
        component.set('v.message', isValid ? 'Valid 11' : 'Invalid 11');
    },
    runBatch12 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch12(component, size);
        } else {
            component.set('v.message', 'No records for batch 12');
        }
    },
    validate12 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue12(value);
        component.set('v.message', isValid ? 'Valid 12' : 'Invalid 12');
    },
    runBatch13 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch13(component, size);
        } else {
            component.set('v.message', 'No records for batch 13');
        }
    },
    validate13 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue13(value);
        component.set('v.message', isValid ? 'Valid 13' : 'Invalid 13');
    },
    runBatch14 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch14(component, size);
        } else {
            component.set('v.message', 'No records for batch 14');
        }
    },
    validate14 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue14(value);
        component.set('v.message', isValid ? 'Valid 14' : 'Invalid 14');
    },
    runBatch15 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch15(component, size);
        } else {
            component.set('v.message', 'No records for batch 15');
        }
    },
    validate15 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue15(value);
        component.set('v.message', isValid ? 'Valid 15' : 'Invalid 15');
    },
    runBatch16 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch16(component, size);
        } else {
            component.set('v.message', 'No records for batch 16');
        }
    },
    validate16 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue16(value);
        component.set('v.message', isValid ? 'Valid 16' : 'Invalid 16');
    },
    runBatch17 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch17(component, size);
        } else {
            component.set('v.message', 'No records for batch 17');
        }
    },
    validate17 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue17(value);
        component.set('v.message', isValid ? 'Valid 17' : 'Invalid 17');
    },
    runBatch18 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch18(component, size);
        } else {
            component.set('v.message', 'No records for batch 18');
        }
    },
    validate18 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue18(value);
        component.set('v.message', isValid ? 'Valid 18' : 'Invalid 18');
    },
    runBatch19 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch19(component, size);
        } else {
            component.set('v.message', 'No records for batch 19');
        }
    },
    validate19 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue19(value);
        component.set('v.message', isValid ? 'Valid 19' : 'Invalid 19');
    },
    runBatch20 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch20(component, size);
        } else {
            component.set('v.message', 'No records for batch 20');
        }
    },
    validate20 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue20(value);
        component.set('v.message', isValid ? 'Valid 20' : 'Invalid 20');
    },
    runBatch21 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch21(component, size);
        } else {
            component.set('v.message', 'No records for batch 21');
        }
    },
    validate21 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue21(value);
        component.set('v.message', isValid ? 'Valid 21' : 'Invalid 21');
    },
    runBatch22 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch22(component, size);
        } else {
            component.set('v.message', 'No records for batch 22');
        }
    },
    validate22 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue22(value);
        component.set('v.message', isValid ? 'Valid 22' : 'Invalid 22');
    },
    runBatch23 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch23(component, size);
        } else {
            component.set('v.message', 'No records for batch 23');
        }
    },
    validate23 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue23(value);
        component.set('v.message', isValid ? 'Valid 23' : 'Invalid 23');
    },
    runBatch24 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch24(component, size);
        } else {
            component.set('v.message', 'No records for batch 24');
        }
    },
    validate24 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue24(value);
        component.set('v.message', isValid ? 'Valid 24' : 'Invalid 24');
    },
    runBatch25 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch25(component, size);
        } else {
            component.set('v.message', 'No records for batch 25');
        }
    },
    validate25 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue25(value);
        component.set('v.message', isValid ? 'Valid 25' : 'Invalid 25');
    },
    runBatch26 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch26(component, size);
        } else {
            component.set('v.message', 'No records for batch 26');
        }
    },
    validate26 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue26(value);
        component.set('v.message', isValid ? 'Valid 26' : 'Invalid 26');
    },
    runBatch27 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch27(component, size);
        } else {
            component.set('v.message', 'No records for batch 27');
        }
    },
    validate27 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue27(value);
        component.set('v.message', isValid ? 'Valid 27' : 'Invalid 27');
    },
    runBatch28 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch28(component, size);
        } else {
            component.set('v.message', 'No records for batch 28');
        }
    },
    validate28 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue28(value);
        component.set('v.message', isValid ? 'Valid 28' : 'Invalid 28');
    },
    runBatch29 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch29(component, size);
        } else {
            component.set('v.message', 'No records for batch 29');
        }
    },
    validate29 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue29(value);
        component.set('v.message', isValid ? 'Valid 29' : 'Invalid 29');
    },
    runBatch30 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch30(component, size);
        } else {
            component.set('v.message', 'No records for batch 30');
        }
    },
    validate30 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue30(value);
        component.set('v.message', isValid ? 'Valid 30' : 'Invalid 30');
    },
    runBatch31 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch31(component, size);
        } else {
            component.set('v.message', 'No records for batch 31');
        }
    },
    validate31 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue31(value);
        component.set('v.message', isValid ? 'Valid 31' : 'Invalid 31');
    },
    runBatch32 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch32(component, size);
        } else {
            component.set('v.message', 'No records for batch 32');
        }
    },
    validate32 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue32(value);
        component.set('v.message', isValid ? 'Valid 32' : 'Invalid 32');
    },
    runBatch33 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch33(component, size);
        } else {
            component.set('v.message', 'No records for batch 33');
        }
    },
    validate33 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue33(value);
        component.set('v.message', isValid ? 'Valid 33' : 'Invalid 33');
    },
    runBatch34 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch34(component, size);
        } else {
            component.set('v.message', 'No records for batch 34');
        }
    },
    validate34 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue34(value);
        component.set('v.message', isValid ? 'Valid 34' : 'Invalid 34');
    },
    runBatch35 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch35(component, size);
        } else {
            component.set('v.message', 'No records for batch 35');
        }
    },
    validate35 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue35(value);
        component.set('v.message', isValid ? 'Valid 35' : 'Invalid 35');
    },
    runBatch36 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch36(component, size);
        } else {
            component.set('v.message', 'No records for batch 36');
        }
    },
    validate36 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue36(value);
        component.set('v.message', isValid ? 'Valid 36' : 'Invalid 36');
    },
    runBatch37 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch37(component, size);
        } else {
            component.set('v.message', 'No records for batch 37');
        }
    },
    validate37 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue37(value);
        component.set('v.message', isValid ? 'Valid 37' : 'Invalid 37');
    },
    runBatch38 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch38(component, size);
        } else {
            component.set('v.message', 'No records for batch 38');
        }
    },
    validate38 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue38(value);
        component.set('v.message', isValid ? 'Valid 38' : 'Invalid 38');
    },
    runBatch39 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch39(component, size);
        } else {
            component.set('v.message', 'No records for batch 39');
        }
    },
    validate39 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue39(value);
        component.set('v.message', isValid ? 'Valid 39' : 'Invalid 39');
    },
    runBatch40 : function(component, event, helper) {
        var size = component.get('v.records').length || 5;
        if (size > 0) {
            helper.callBatch40(component, size);
        } else {
            component.set('v.message', 'No records for batch 40');
        }
    },
    validate40 : function(component, event, helper) {
        var value = event.getSource().get('v.value');
        var isValid = helper.checkValue40(value);
        component.set('v.message', isValid ? 'Valid 40' : 'Invalid 40');
    }
})