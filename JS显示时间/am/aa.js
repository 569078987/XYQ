function addzero (i) {
		if(i < 10){
			return "0" + i;
		}
		return i;
}
function shoW(){
	var i;
    dd = new Array("��","һ","��","��","��","��","��");
	var d = new Date();
	//�꣬�£���
	time = d.getFullYear() + "��";
	time += (d.getMonth() + 1) + "��";
	time += d.getDate() + "��";

	//���ڼ�
	time += "   ����" + dd[d.getDay()] + "    ";
	//ʱ���֣���
	
	time += addzero (d.getHours()) + ":";
	
	time += addzero (d.getMinutes()) + ":";
	
	time += addzero ( d.getSeconds());
	//��ʾ
	alert(time);
	}
