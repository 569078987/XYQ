(function ($) {
	
	window['EU'] = {};
	
	/**
	 * ��ȡ��Ȱٷֱ�
	 */
	EU.fixWidth = function(percent) {
		
		return ($(window).width()) * percent;
	}
	
	/**
	 * ��ȡ�߶Ȱٷ�
	 */
	EU.fixHeight = function(percent) {
		
		return ($(window).height()) * percent;
	}
	
	/**
	 * ������
	 */
	EU.dialog = function(_id, options) {
		/* Dialog���Բ��� */
		var id = _id; 
		var title       = (options && undefined != options.title)?options.title:'�´���';
		var collapsible = (options && undefined != options.collapsible)?options.collapsible:false;
		var minimizable = (options && undefined != options.minimizable)?options.minimizable:false;
		var maximizable = (options && undefined != options.maximizable)?options.maximizable:false;
		var resizable   = (options && undefined != options.resizable)?options.resizable:false;
		var toolbar     = (options && undefined != options.toolbar)?options.toolbar:null;
		var buttons     = (options && undefined != options.buttons)?options.buttons:null;
		var width       = (options && undefined != options.width)?options.width:400;
		var height      = (options && undefined != options.height)?options.height:200;
		var closed      = (options && undefined != options.closed)?options.closed:false;
		var closable    = (options && undefined != options.closable)?options.closable:true;
		var draggable   = (options && undefined != options.draggable)?options.draggable:true;
		var href        = (options && undefined != options.href)?options.href:'';
		var modal       = (options && undefined != options.modal)?options.modal:true;
		var iframe      = (options && undefined != options.iframe)?options.iframe:false;
		var onClose     = (options && undefined != options.onClose)?options.onClose:null;
		
		/* ����DIV */
		var layer = document.createElement('div');
		layer.setAttribute('id', id + '_modal');
		document.body.appendChild(layer);
		
		if (iframe) {
			layer.innerHTML = '<iframe id="' + id + '_ifr" src="' + href+ '" frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" scrolling="no" allowtransparency="yes" height="100%" />';
		}
		
		$('#' + id + '_modal').dialog({
			title:title, 
		    collapsible:collapsible, 
		    minimizable:minimizable, 
		    maximizable:maximizable, 
		    resizable:resizable, 
		    toolbar:toolbar, 
		    buttons:buttons, 
		    width:width, 
		    height:height, 
		    closed:closed, 
		    closable:closable, 
		    draggable:draggable, 
		    href:(iframe)?null:href, 
		    modal:modal,
		    onClose:onClose
		});
	}
	
	/**
	 * �ر�Dialog
	 */
	EU.dialog.close = function(id) {
		$('#' + id + '_modal').dialog('close');
	}
	
	/**
	 * ��ʾ��ʾ�� Info
	 */
	EU.showInfo = function(content) {
		$.messager.alert('��Ϣ��ʾ', content, 'info');
	}
	
	/**
	 * ��ʾ��ʾ�� Info �ص�����
	 */
	EU.showInfo = function(content, callback) {
		$.messager.alert('��Ϣ��ʾ', content, 'info', callback);
	}
	
	
	/**
	 * ��ʾ��ʾ�� Error
	 */
	EU.showError = function(content) {
		$.messager.alert('������ʾ', content, 'error');
	}
	
	/**
	 * ��ʾ��ʾ�� Error �ص�����
	 */
	EU.showError = function(content, callback) {
		$.messager.alert('������ʾ', content, 'error', callback);
	}
	
	/**
	 * ��ʾ��ʾ�� Warning
	 */
	EU.showWarning = function(content) {
		$.messager.alert('������ʾ', content, 'warning');
	}
	
	/**
	 * ��ʾ��ʾ�� Warning �ص�����
	 */
	EU.showWarning = function(content, callback) {
		$.messager.alert('������ʾ', content, 'warning', callback);
	}
	
	/**
	 * ��ʾ��ʾ�� Question
	 */
	EU.showQuestion = function(content) {
		$.messager.alert('������ʾ', content, 'question');
	}
	
	/**
	 * ��ʾConfirm
	 */
	EU.confirm = function(content, callback) {
		$.messager.confirm('��ʾ', content, callback);
	}
	
	$.extend($.fn.validatebox.defaults.rules, {
		
		/**
		 * �ֻ�������֤
		 */
		phone:{
			validator:function(value) {
				
				return /^(13|15|18|14|17)\d{9}$/i.test(value);
			}, message:"��������Ч���ֻ����룡"
		},
		
		/**
		 * ������֤(����������С��)
		 */
		number:{
			validator:function(value) {
				
				return  /^\d+(\.\d+)?$/i.test(value);
			}, message:"��������Ч�����֣�"
		},
		
		/**
		 * ������֤
		 */
		integer:{
			validator:function(value) {
				
				return /^[+]?[1-9]+\d*$/i.test(value);
			}, message:"��������Ч��������"
		},
		
		/**
		 * ������֤
		 */
		passwd:{
			validator:function(value, param) {
				if($("#" + param[0]).val() != "" && value != "") {
					return $("#" + param[0]).val() == value;
				} else {
					return true;
				}
			}, message:"������������벻һ�£�"
		}
	});
	
})(jQuery);