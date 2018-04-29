//测试用
	 function ListNode(val) {
      		this.val = val;
     		this.next = null;
  		}
 		/**
 		* Definition for singly-linked list.
		* function ListNode(val) {
		*     this.val = val;
 		*     this.next = null;
 		* }
 		*/
		/**
 		* @param {ListNode} l1
 		* @param {ListNode} l2
 		* @return {ListNode}
 		*/
        var addTwoNumbers = function(l1, l2) {
    			var p1=l1;
    			var p2=l2;
    			var p=null,sum;   //l是新节点，sum是两个节点值的和
    			var head = new ListNode(0);
    			var l=head;
    			var flag=0;  //进位器
    			while(p1!==null || p2!==null)
    			{
    				sum = (p1!==null? p1.val : 0)+(p2!==null? p2.val : 0)+flag;
    				flag = sum<10? 0:1;
    				sum = sum%10;
    				p=l;
    				l = new ListNode(sum);
    				p.next =l;
    				l.next=null;
    				p1=p1!=null?p1.next:null;
    				p2=p2!=null?p2.next:null;
    			}

    			if(flag == 1){
    				p=l;
    				l = new ListNode(1);
    				p.next=l;
    				l.next = null;
    				return head.next;
    			}
    			return head.next;
			};

		//开始测试
		var a1= new ListNode(3);
		var a2= new ListNode(5);
		 var a3= new ListNode(4);
		a1.next=a2;
		a2.next=a3;
		a3.next=null;
		var b1 = new ListNode(5);
		var b2 = new ListNode(1);
		var b3 = new ListNode(6);
		b1.next = b2;
		b2.next = b3;
		b3.next = null;

		var c = addTwoNumbers(a1,b1);
		while(c !== null){
			console.log(c.val);
			c=c.next;
		}
