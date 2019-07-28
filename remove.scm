; remove the first occurance of atom A from L
(define (remove L A)                
  (cond ( (null? L) '() )           
        ( (= (car L) A) (cdr L))    			  ; Match found! 
        (else (cons (car L)(remove (cdr L) A)))   ; keep searching
  )
)

; from https://cs.gmu.edu/~white/CS363/Scheme/SchemeSamples.html